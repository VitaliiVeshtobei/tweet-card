export const getTweets = () => {
  const tweets = JSON.parse(localStorage.getItem("tweets"));
  return tweets;
};
export const setTweet = (id, nameButton, followers) => {
  const tweets = getTweets();

  const filtredTweets = tweets.filter((t) => t.id === id);
  if (!filtredTweets.length) {
    const tweet = { id, nameButton, followers };
    tweets.push(tweet);
    localStorage.setItem("tweets", JSON.stringify(tweets));
    return;
  }
  const index = tweets.findIndex((t) => t.id === id);
  tweets[index].nameButton = nameButton;
  tweets[index].followers = followers;
  localStorage.setItem("tweets", JSON.stringify(tweets));
};

export const setFirstTweet = (id, nameButton, followers) => {
  const tweets = [];
  const tweet = { id, nameButton, followers };
  tweets.push(tweet);
  localStorage.setItem("tweets", JSON.stringify(tweets));
};

export const getLocalTweet = (id) => {
  const tweets = getTweets();
  if (tweets) {
    const filtredTweet = tweets.filter((t) => t.id === id);
    if (filtredTweet.length) {
      return filtredTweet[0];
    }
  }
};
