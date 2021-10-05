type VideoFormatUrls = {
  format720p: URL;
  format1080p: URL;
};

type SubtitleFormatUrls = {
  english: URL;
  german: URL;
};

const videoFormats: VideoFormatUrls = {
  format720p: new URL('https://www.format720p.co.uk'),
  format1080p: new URL('https://www.format1080p.co.uk'),
};

const subtiles: VideoFormatUrls = {
  format720p: new URL('https://www.format720p.co.uk'),
  format1080p: new URL('https://www.format1080p.co.uk'),
};

function isAvailable<Formats>(
  obj: Formats,
  key: string | number | boolean | symbol,
): key is keyof Formats {
  return key in obj;
}
