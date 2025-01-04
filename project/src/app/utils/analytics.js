export function aggregateByPostType(data) {
  return data.reduce((acc, post) => {
    if (!acc[post.postType]) {
      acc[post.postType] = {
        likes: 0,
        comments: 0,
        shares: 0,
        reach: 0,
        count: 0
      };
    }
    
    acc[post.postType].likes += post.likes;
    acc[post.postType].comments += post.comments;
    acc[post.postType].shares += post.shares;
    acc[post.postType].reach += post.reach;
    acc[post.postType].count += 1;
    
    return acc;
  }, {});
}