export const replaceMongoIdInObject = (obj) => {
    if (!obj) return null;

    const {_id, ...updatedObj} = {...obj, id: obj._id.toString()};
   return updatedObj;
  }
