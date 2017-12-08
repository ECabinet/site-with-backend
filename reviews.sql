create table Reviews
	(reviewId int,
	rTitle text,
	rDescription text,
	userId text,
	primary key(reviewId),
	foreign key(userId) references Users(userId)
);
