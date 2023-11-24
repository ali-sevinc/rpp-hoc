import { useState } from "react";
import { Companytype } from "./App";
interface PropsType {
  company: Companytype;
  defaultVisibility?: boolean;
}
export default function CompanyItem({
  company,
  defaultVisibility = false,
}: PropsType) {
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}
