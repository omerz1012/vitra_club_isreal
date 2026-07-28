const URL_REGEX = /(https?:\/\/[^\s]+)/g

export default function Linkify({ text }) {
  return text.split(URL_REGEX).map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
        {part}
      </a>
    ) : (
      part
    )
  )
}
