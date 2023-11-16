#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER dbusr WITH PASSWORD '2remewupheBI0ERlWrOT';
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_partner_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_partner_db TO dbusr;
  \c wp_partner_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_merchant_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_merchant_db TO dbusr;
  \c wp_merchant_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_account_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_account_db TO dbusr;
  \c wp_account_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_gift_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_gift_db TO dbusr;
  \c wp_gift_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_redemption_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_redemption_db TO dbusr;
  \c wp_redemption_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_pnc_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_pnc_db TO dbusr;
  \c wp_pnc_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_wcp_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_wcp_db TO dbusr;
  \c wp_wcp_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_tabapay_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_tabapay_db TO dbusr;
  \c wp_tabapay_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_card_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_card_db TO dbusr;
  \c wp_card_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_visa_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_visa_db TO dbusr;
  \c wp_visa_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_mastercard_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_mastercard_db TO dbusr;
  \c wp_mastercard_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE wp_fidel_db;
  GRANT ALL PRIVILEGES ON DATABASE wp_fidel_db TO dbusr;
  \c wp_fidel_db;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
EOSQL
