CREATE TABLE user_tables {
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(50),
};

CREATE TABLE fields (
  id SERIAL PRIMARY KEY,
  field_name VARCHAR(140) NOT NULL,
  field_type VARCHAR(140) NOT NULL,
  default_value VARCHAR(140),
  primary_key BOOLEAN NOT NULL,
  unique_bool BOOLEAN NOT NULL,
  required_bool BOOLEAN NOT NULL,
  queryable BOOLEAN NOT NULL,
  table_relationship VARCHAR(140) NOT NULL,
  field_relationship VARCHAR(140) NOT NULL,
  type_relationship VARCHAR(140),
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  user_tables_id INT FOREIGN KEY
);