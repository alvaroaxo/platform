#!/bin/bash
set -e

_VERSION=${1:latest}

_REPOSITORY="75226642XXXX.dkr.ecr.us-east-2.amazonaws.com"

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 75226642XXXX.dkr.ecr.us-east-2.amazonaws.com



#mvn versions:set -DnewVersion=$_VERSION

#mvn clean package -P prod -DskipTests

function buildAndPushSandboxFront() {
  _IMAGE=$1
  _BASE_PATH="./$1"
  _TAG="$_REPOSITORY/$_IMAGE:$_VERSION"

  docker build -f $_IMAGE/docker/$_VERSION/Dockerfile -t $_TAG $_BASE_PATH
  docker push $_TAG
}

function buildAndPush() {
  _IMAGE=$1
  _BASE_PATH="./$1"
  _TAG="$_REPOSITORY/$_IMAGE:$_VERSION"

  docker build -t $_TAG $_BASE_PATH
  docker push $_TAG
}

buildAndPushSandboxFront "wp-app-admin"
#buildAndPush "wp-partner-service"
#buildAndPush "wp-merchant-service"
#buildAndPush "wp-gift-service"
#buildAndPush "wp-redemption-service"
#buildAndPush "wp-account-service"
#buildAndPush "wp-pnc-service"
#buildAndPush "wp-wcp-service"
#buildAndPush "wp-tabapay-service"
#buildAndPush "wp-visa-service"
#buildAndPush "wp-fidel-service"
#buildAndPush "wp-api-gateway"
#buildAndPush "wp-api-partner-v1"
#buildAndPush "wp-api-partner-v2"
#buildAndPush "wp-api-partner"

#mvn versions:revert
