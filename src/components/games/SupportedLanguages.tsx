/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SupportedLanguages({
  languageSupports,
}: {
  languageSupports: any;
}) {
  const languages: any = {};

  languageSupports = languageSupports ?? [];
  for (const data of languageSupports) {
    const langId = data.language.id;
    const langSupportId = data.language_support_type.id;
    if (langId in languages) {
      if (langSupportId == 1) {
        languages[langId][1] = true;
      } else if (langSupportId == 2) {
        languages[langId][2] = true;
      } else if (langSupportId == 3) {
        languages[langId][3] = true;
      }
    } else {
      const languageData = {
        name: data.language.name,
        1: false,
        2: false,
        3: false,
      };

      if (langSupportId == 1) {
        languageData[1] = true;
      } else if (langSupportId == 2) {
        languageData[2] = true;
      } else if (langSupportId == 3) {
        languageData[3] = true;
      }
      languages[langId] = languageData;
    }
  }

  return (
    <div className="flex mt-3 border rounded-md gap-3 justify-center flex-wrap min-w-100 p-3  bg-gray-500">
      <h1 className="mt-3">Supported Languages</h1>
      <table className="border-separate border-spacing-x-3 border-spacing-y-2">
        <thead className="text-center">
          <tr>
            <td>Language</td>
            <td>Audio</td>
            <td>Subtitles</td>
            <td>Interfaces</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(languages).map((key: any, idx: number) => {
            return (
              <tr key={idx} className="text-center">
                <td className="">{languages[key].name}</td>
                <td className="">
                  {languages[key][1] && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e3e3e3"
                      className="mx-auto"
                    >
                      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                  )}
                </td>
                <td className="">
                  {languages[key][2] && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e3e3e3"
                      className="mx-auto"
                    >
                      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                  )}
                </td>
                <td className="">
                  {languages[key][3] && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e3e3e3"
                      className="mx-auto"
                    >
                      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                    </svg>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
