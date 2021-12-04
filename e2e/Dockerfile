FROM node:12.19.0-alpine3.10

# Java
RUN apk add openjdk11
ENV JAVA_HOME=/usr/lib/jvm//java-11-openjdk
ENV PATH="$JAVA_HOME/bin:/bin:${PATH}"
RUN javac --version

# PHP
RUN apk add php
RUN apk add php7-dom
RUN apk add php7-xml
RUN apk add php7-xmlwriter
RUN apk add php7-tokenizer
RUN php --version
RUN apk add composer

# Python
RUN apk add python2 python3
RUN python --version
RUN python3 --version

# Go
RUN apk add gcc musl-dev openssl go
RUN go version

# Ruby
RUN apk add ruby
RUN ruby -v

# bash
RUN apk add bash

# Rust
RUN apk add rust cargo
RUN cargo --version

# C# 6.0
RUN apk add icu libintl curl
ADD https://download.visualstudio.microsoft.com/download/pr/bb523fba-7eb0-49ff-8214-c78c65dae090/7e7f9798ee57bf93649ada3eb13a79ae/dotnet-sdk-6.0.100-linux-musl-x64.tar.gz dotnet.tar.gz
ENV DOTNET_FILE=dotnet.tar.gz
ENV DOTNET_ROOT="/root/.dotnet"
RUN mkdir -p "$DOTNET_ROOT" && tar zxf "$DOTNET_FILE" -C "$DOTNET_ROOT"
ENV PATH=$PATH:$DOTNET_ROOT
RUN dotnet --version

# Clojure
RUN apk add git
RUN curl -O https://download.clojure.org/install/linux-install-1.10.3.1040.sh
RUN chmod +x linux-install-1.10.3.1040.sh
RUN ./linux-install-1.10.3.1040.sh

# Install our tool
ADD starters.tgz /app
WORKDIR /app/package
RUN npm link

# make a testing area
RUN mkdir /testing
WORKDIR /testing
