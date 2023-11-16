# LOCAL ENVIRONMENT SETUP

## I. PREREQUISITES

1. Docker Engine 24.0+
2. Docker Compose 2.17+

## II. NETWORK

Create network (if not exist)

```
docker network create --attachable compose-net
```

## III. DATABASE

### Step 01

open compose directory

```
cd [:PROJECT_DIR]/compose/database
```

### Step 02

Start database

```
docker-compose up -d
```

### Step 03 (OPTIONAL)

Run command if no databases were created at startup

```
docker exec -u postgres wp-db bash /docker-entrypoint-initdb.d/init-user-db.sh
```

### Step 04

Zelle DB connection params

```
servidor: localhost
puerto: 5434
base de datos: wp_zelle_db
usuario: dbusr
contraseña: 2remewupheBI0ERlWrOT
```

Payout DB connection params

```
servidor: localhost
puerto: 5434
base de datos: wp_payout_db
usuario: dbusr
contraseña: 2remewupheBI0ERlWrOT
```
