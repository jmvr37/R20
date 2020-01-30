// export const formatData = (sessions, fav) => {
//   sessions.map((x, index) => {
//     if (fav.indexOf(x.id) == -1) {
//       sessions[index]['favorite'] = false;
//     } else {
//       sessions[index]['favorite'] = true;
//     }
//   });
//   return sessions
//     .reduce((acc, curr) => {
//       const timeExists = acc.find(section => section.title === curr.startTime);
//       timeExists
//         ? timeExists.data.push(curr)
//         : acc.push({title: curr.startTime, data: [curr]});
//       return acc;
//     }, [])
//     .sort((a, b) => a.title - b.title);
// };

export const formatData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.startTime);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({title: curr.startTime, data: [curr]});
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};
