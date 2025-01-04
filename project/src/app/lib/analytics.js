export function aggregateDataByPostType(data) {
  return data.reduce((acc, post) => {
    const type = post['Post Type'];
    if (!acc[type]) {
      acc[type] = {
        likes: 0,
        comments: 0,
        shares: 0,
        reach: 0
      };
    }
    
    acc[type].likes += post.Likes;
    acc[type].comments += post.Comments;
    acc[type].shares += post.Shares;
    acc[type].reach += post.Reach;
    
    return acc;
  }, {});
}