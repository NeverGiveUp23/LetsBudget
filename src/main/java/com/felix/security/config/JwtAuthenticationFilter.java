package com.felix.security.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.Security;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

// tell spring that you want this class to be spring bean
@Component
@RequiredArgsConstructor   // Lombok expression
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    // Inject JwtService and UserDetailsService dependencies via constructor
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {

        // Get the Authorization header from the request
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;

        // If the header is not present or does not start with "Bearer ", pass the request along the filter chain and return
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Extract the JWT token from the Authorization header
        jwt = authHeader.substring(7);

        // Extract the username (email) from the JWT token
        userEmail = jwtService.extractUsername(jwt);

        // If the username is not null and the user is not already authenticated, authenticate the user
        if (userEmail != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            // Load the UserDetails for the user with the given email
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(userEmail);

            // Check if the token is valid for the user
            if (jwtService.isTokenValid(jwt, userDetails)) {

                // If the token is valid, create a new authentication token with the UserDetails and set it in the SecurityContext
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        // Pass the request along the filter chain
        filterChain.doFilter(request, response);
    }

}
