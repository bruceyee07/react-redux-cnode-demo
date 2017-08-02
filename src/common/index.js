export const prettyDate = (date) => {
	date = new Date(date)

	const minute = 60 * 1000
	const hour = 60 * minute
	const day = 24 * hour
	const month = 31 * day
	const year = 12 * month

	if (date == null) { 
    return null
  } 
  const diff = new Date().getTime() - date.getTime()
  let r = 0
  if (diff > year) { 
    r = parseInt(diff / year)
    return r + '年前'
  } 
  if (diff > month) { 
    r = parseInt(diff / month)
    return r + '个月前' 
  } 
  if (diff > day) { 
    r = parseInt(diff / day) 
    return r + '天前'
  } 
  if (diff > hour) { 
    r = parseInt(diff / hour)
    return r + '小时前' 
  } 
  if (diff > minute) { 
    r = parseInt(diff / minute)
    return r + '分钟前'
  } 
  return '刚刚'
}

export const getScrollValue = () => {
  if (window.pageYOffset != null) {
    // 支持IE9 +
    return{
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  } else if (document.compatMode == 'CSS1Compat') {
  // 声明了DTD
    return {
      left:document.documentElement.scrollLeft,
      top:document.documentElement.scrollTop
    }
  }
  return {
    left: document.body.scrollLeft,
    top: document.body.scrollTop
  }
}