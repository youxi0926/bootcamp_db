CREATE TABLE users (
    id bigint PRIMARY KEY AUTO_INCREMENT,
    email varchar(255) NOT NULL UNIQUE,
    PASSWORD char(20) NOT NULL,
    username varchar(255) NOT NULL,
    registered_at datetime NOT NULL
);

CREATE TABLE posts (
    id bigint PRIMARY KEY AUTO_INCREMENT,
    user_id bigint NOT NULL,
    content text NOT NULL,
    posted_at datetime NOT NULL,
    CONSTRAINT fk_posts_user_id FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE likes (
    id bigint PRIMARY KEY AUTO_INCREMENT,
    user_id bigint NOT NULL,
    post_id bigint NOT NULL,
    CONSTRAINT fk_likes_user_id FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_likes_post_id FOREIGN KEY (post_id) REFERENCES posts(id),
    UNIQUE KEY uk_likes_user_id_post_id (user_id, post_id)
);

CREATE TABLE tags (
    id bigint PRIMARY KEY AUTO_INCREMENT,
    name varchar(140) NOT NULL UNIQUE
);

CREATE TABLE post_tags (
    id bigint PRIMARY KEY AUTO_INCREMENT,
    post_id bigint NOT NULL,
    tag_id bigint NOT NULL,
    CONSTRAINT fk_post_tags_post_id FOREIGN KEY (post_id) REFERENCES posts(id),
    CONSTRAINT fk_post_tags_tag_id FOREIGN KEY (tag_id) REFERENCES tags(id)
);
