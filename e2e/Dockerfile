FROM node:12.19.0-alpine3.10

# Java
RUN apk add openjdk11
ENV JAVA_HOME=/usr/lib/jvm//java-11-openjdk
ENV PATH="$JAVA_HOME/bin:/bin:${PATH}"
RUN javac --version

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

# C#
RUN apk add icu libintl curl
ADD https://dot.net/v1/dotnet-install.sh dotnet-install.sh
RUN chmod +x dotnet-install.sh
RUN ./dotnet-install.sh
ENV CSHARP_HOME=/root/.dotnet
ENV PATH="$CSHARP_HOME:${PATH}"
RUN dotnet --version

# Rust
RUN apk add rust cargo
RUN cargo --version

# Install our tool
ADD starters.tgz /app
WORKDIR /app/package
RUN npm link

# make a testing area
RUN mkdir /testing
WORKDIR /testing