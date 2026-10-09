#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
IMG="$ROOT/public/images"
TMP="$ROOT/.tmp-images"

mkdir -p "$TMP"

optimize() {
  local input="$1"
  local output="$2"
  local max="$3"
  local quality="$4"
  local tmp="$TMP/$(basename "$input")"

  sips -Z "$max" "$input" --out "$tmp" >/dev/null
  cwebp -quiet -q "$quality" "$tmp" -o "$output"
  echo "$(basename "$output") ($(du -k "$output" | cut -f1) KB)"
}

# Hero: preserve alpha — jangan pakai sips (merusak transparansi)
if [[ -f "$IMG/hero.png" ]]; then
  cwebp -quiet -q 90 -alpha_q 100 -m 6 -resize 1100 0 "$IMG/hero.png" -o "$IMG/hero.webp"
  echo "hero.webp ($(du -k "$IMG/hero.webp" | cut -f1) KB, with alpha)"
  cwebp -quiet -q 88 -alpha_q 100 -m 6 -resize 800 0 "$IMG/hero.png" -o "$IMG/hero-og.webp"
  echo "hero-og.webp ($(du -k "$IMG/hero-og.webp" | cut -f1) KB, with alpha)"
fi
for src in Aluna Midnight Ruffle; do
  lower="$(echo "$src" | tr '[:upper:]' '[:lower:]')"
  if [[ -f "$IMG/${src}.PNG" ]]; then
    cwebp -quiet -q 85 -alpha_q 100 -m 6 -resize 588 0 "$IMG/${src}.PNG" -o "$IMG/${lower}.webp"
    echo "${lower}.webp ($(du -k "$IMG/${lower}.webp" | cut -f1) KB)"
  fi
done
# Logo: preserve alpha (skip sips — it can flatten transparency)
cwebp -quiet -q 90 -resize 206 0 "$IMG/Luvea.png" -o "$IMG/Luvea.webp"
echo "Luvea.webp ($(du -k "$IMG/Luvea.webp" | cut -f1) KB, with alpha)"
optimize "$IMG/kain_adem.png" "$IMG/kain_adem.webp" 640 78
optimize "$IMG/kelembutan_serat.png" "$IMG/kelembutan_serat.webp" 640 78
optimize "$IMG/kancing_premium.png" "$IMG/kancing_premium.webp" 640 78
optimize "$IMG/ketahanan_jahitan.png" "$IMG/ketahanan_jahitan.webp" 640 78

for jpg in "$IMG/testimonials"/*.jpg; do
  base="$(basename "$jpg" .jpg)"
  tmp="$TMP/$base.jpg"
  sips -z 120 120 "$jpg" --out "$tmp" >/dev/null
  cwebp -quiet -q 80 "$tmp" -o "$IMG/testimonials/$base.webp"
  echo "testimonials/$base.webp"
done

rm -rf "$TMP"
echo "Done."
