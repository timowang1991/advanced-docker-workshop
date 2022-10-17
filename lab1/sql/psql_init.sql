CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    content VARCHAR(1024) NOT NULL
);

INSERT INTO todo(content)
VALUES
('participate advanced docker workshop'),
('say hi to Timo every day');