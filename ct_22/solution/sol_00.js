function solution(chicken) {
  let serviceCount = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    const newChicken = Math.floor(coupon / 10);
    serviceCount += newChicken;

    coupon = (coupon % 10) + newChicken;
  }
  return serviceCount;
}
