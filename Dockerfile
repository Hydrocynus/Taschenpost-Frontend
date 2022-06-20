FROM nginx
RUN mkdir /app
COPY dist /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

# docker build . -t taschenpost-frontend