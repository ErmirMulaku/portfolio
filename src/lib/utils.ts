/** Tiny classNames joiner — no runtime dep needed for this small a surface. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Extract a display host from a URL, e.g. "eduwo.ch". */
export function hostFromUrl(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, '');
  } catch {
    return url;
  }
}
