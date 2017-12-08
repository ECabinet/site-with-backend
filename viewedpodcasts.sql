create table ViewedPodcasts
	(userId int,
	podcastId int,
	primary key(userId, podcastId),
	foreign key(userId) references Users(userId),
	foreign key(podcastId) references Podcasts(podcastId)
);
