function RGB(): string {
  return `${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)}`
}

export function randomHEX(): string {
  return `#${Math.random().toString(16).slice(2, 8)}`
}

export function randomRGB(): string {
  return `rgb(${RGB()})`
}

export function randomRGBA(): string {
  return `rgba(${RGB()}, ${Math.random().toFixed(3)})`
}