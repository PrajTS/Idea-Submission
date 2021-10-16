export const sortIdeas = (
  ideas: IIdea[],
  sortField?: string,
  isIncreasingOrder = false,
) => {
  const _ideas = [...ideas]
  _ideas.sort(function (a, b) {
    if (sortField === 'votes') {
      return isIncreasingOrder
        ? (a?.votes as number) - (b?.votes as number)
        : (b?.votes as number) - (a?.votes as number)
    }
    const aDate = new Date(a.createdAt as string)
    const bDate = new Date(b.createdAt as string)
    return isIncreasingOrder
      ? aDate.getTime() - bDate.getTime()
      : bDate.getTime() - aDate.getTime()
  })
  return _ideas
}
