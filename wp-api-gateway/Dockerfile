FROM amazoncorretto:17-alpine-jdk
ENV SERVER_PORT="8080"
ENV DB_URL="" DB_USERNAME="" DB_PASSWORD="" DB_SCHEMA="public"
ENV WOLFE_SERVER_URL_LB="" WOLFE_SERVER_URL_AG=""
ENV LOGGING_LEVEL="info"
ENV OKTA_OAUTH2_ISSUER="" OKTA_OAUTH2_AUDIENCE=""
COPY target/*.jar /app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=prod","-jar","/app.jar"]
