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

optimize "$IMG/sekar.png" "$IMG/sekar.webp" 1100 82
optimize "$IMG/luvea_piyama_1.png" "$IMG/luvea_piyama_1.webp" 588 80
optimize "$IMG/luvea_piyama_2.png" "$IMG/luvea_piyama_2.webp" 588 80
optimize "$IMG/luvea_piyama_3.png" "$IMG/luvea_piyama_3.webp" 588 80
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
