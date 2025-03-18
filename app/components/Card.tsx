export default function Card({
  url,
  text,
  title,
  subText,
  description,
}: {
  url?: string;
  text: string;
  title: string;
  subText: string;
  description: string;
}) {
  const isValidUrl = url && url !== "#";

  const content = (
    <div className="container-card flex justify-between items-center">
      <div>
        <p className="font-medium">
          {text}
          <span className="company-name">{title}</span>
          {subText}
        </p>
        <p className="text-secondary text-sm mt-1">{description}</p>
      </div>
      {isValidUrl && (
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-secondary link-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );

  return isValidUrl ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
