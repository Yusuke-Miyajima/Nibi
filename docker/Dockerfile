FROM ruby:3.0.2
RUN apt-get update && apt-get install -y \
  build-essential \
  nodejs \
  nano vim cron
RUN apt-get -qqy update \
  && apt-get -qqy --no-install-recommends install \
    libfontconfig \
    libfreetype6 \
    xfonts-cyrillic \
    xfonts-scalable \
    fonts-liberation \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
    fonts-tlwg-loma-otf \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get -qyy clean
RUN mkdir -p /app
WORKDIR /app
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && apt-get install -y nodejs
COPY Gemfile Gemfile.lock ./
RUN gem install bundler:2.3.10
RUN bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java
RUN bundle install --jobs 20 --retry 5
# Set the timezone.
ENV TZ=Japan
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# Add a script to be executed every time the container starts.
COPY docker/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001
# The main command to run when the container starts. Also
# tell the Rails dev server to bind to all interfaces by
# default.
# CMD ["rails", "server", "-b", "0.0.0.0"]