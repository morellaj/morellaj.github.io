// Function for creating the list of currently visible units
export default function UnitArr(json){
  let arr = [];
  let i = 0;
  for (let tag in json){
    const unit = json[tag];
    if(!unit.hidden){
      i++;
      arr.push({
        unit: tag,
        title: unit.title,
        order: unit.order,
        ngss: unit.ngss
      })
    }
  }
  return arr;
}