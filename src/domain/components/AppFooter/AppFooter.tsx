import "./AppFooter.scss";
import { Text } from "@/shared/components";

function AppFooter() {
  return (
    <div className="footer flex justify-center">
      <Text className="text-neutral-white ">
        Developed by
        <a
          target="_blank"
          className="text-tertiary hover:text-tertiary-dark font-text-semi-bold ml-1"
          href="https://www.linkedin.com/in/renatolinsdigital"
        >
          Renato Lins
        </a>
      </Text>
    </div>
  );
}

export default AppFooter;
