/////////////////////////////////////////// cachingDecorator ///////////////////////////////////////////////////////

// CPU-heavy (og'ir hisob-kitobli) funksiyalar natijasini eslab qolish (keshlash) uchun ishlatiladi.
function slow(x) {
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // Agar natija keshda bo'lsa
      return cache.get(x); // Uni keshdan qaytaradi
    }

    let result = func(x); // Aks holda funksiyani chaqiradi
    cache.set(x, result); // Va natijani eslab qoladi
    return result;
  };
}

// Obyekt metodlari bilan ishlashda "func.call(this, x)" ishlatiladi.
// Bu 'this'ni yo'qotmaslik va original obyektni saqlab qolish imkonini beradi.
