var g = (a, b) => (b ? g(b, a % b) : Math.abs(a)),
  l = (a, b) => (a * b) / g(a, b),
  p,
  q,
  solution = (a, b, c, d) => {
    return (
      (p = l(b, d)), (q = (a * p) / b + (c * p) / d), [q / g(p, q), p / g(p, q)]
    );
  };
