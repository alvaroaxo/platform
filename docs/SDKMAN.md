# INSTALLATION GUIDE

## I. PREREQUISITES

* MacOS, Linux or Windows (with WSL)

## II. SDKMAN

### Step 01

Download and install sdkman (as non-root user)

```
curl -s "https://get.sdkman.io" | bash
```

### Step 02

Enable sdkman (re-login is required)

```
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

### Step 03

Confirm installation

```
sdk version
```

### Step 04

Open sdkman configuration

```
vi $HOME/.sdkman/etc/config
```

### Step 05

Enable sdkman_auto_env

```
sdkman_auto_env=true
```

## III. JDK 17

### Step 01

Install jdk17 using sdkman

```
sdk install java 17.0.8-zulu
```

### Step 02

Confirm installation

```
java -version
```

## IV. MAVEN

### Step 01

install maven using sdkman

```
sdk install maven 3.6.3
```

### Step 02

confirm installation

```
mvn -version
```
