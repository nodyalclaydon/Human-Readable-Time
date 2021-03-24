function humanReadable(seconds) {
  let sec = 0
  let minutes = 0
  let hours = 0
  
  for (let i = 0; i < seconds; i++){
    if (sec === 59) {
      sec = 0
      if (minutes === 59) {
        minutes = 0
        hours++
      } else { minutes++ }
    } else { sec ++ }
  }
  
    if (sec.toString().length == 1) { sec = "0" + sec }
    if (minutes.toString().length == 1) { minutes = "0" + minutes }
    if (hours.toString().length == 1) { hours = "0" + hours }
    
    return `${hours}:${minutes}:${sec}`
}
