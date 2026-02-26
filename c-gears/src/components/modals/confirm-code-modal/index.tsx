import { IoCloseOutline } from "react-icons/io5";
import { StyledConfirmCodeModal } from "./styles";
import { useConfirmCodeContext } from "../../../contexts/confirm-code-contex";
import { useRef, useState } from "react";
import { useUserSettingsContext } from "../../../contexts/user-settings-context";

const ConfirmCodeModal = () => {
  const { setShowCodeModal, confirmCodeSubmit } = useConfirmCodeContext();
  const { setPendingSensitiveUpdate } = useUserSettingsContext();

  const handleClose = () => {
    setPendingSensitiveUpdate(null);
    setShowCodeModal(false);
  };

  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace") {
      if (code[index] === "" && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (!/^\d{6}$/.test(pastedData)) return;

    const newCode = pastedData.split("");
    setCode(newCode);

    newCode.forEach((_, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i]!.value = newCode[i];
      }
    });

    inputsRef.current[5]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalCode = code.join("");

    if (finalCode.length !== 6) return;

    await confirmCodeSubmit({ code: finalCode });
  };

  return (
    <StyledConfirmCodeModal>
      <div className="box-card-confirm-code">
        <div className="card-confirm-code">
          <div className="header-confirm-code">
            <img
              className="logo-confirm-code"
              alt=""
              src="logo-gearsclub.png"
            />
            <span className="text-confirm-code">Confirm Code</span>
            <IoCloseOutline
              className="icon-close-confirm-code"
              onClick={handleClose}
            />
          </div>
          <form className="form-confirm-code" onSubmit={handleSubmit}>
            <div className="code-input--container">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="code-input"
                  value={digit}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                />
              ))}
            </div>
            <button className="btn-confirm-code" type="submit">
              Confirm
            </button>
          </form>
          <p>A code has been sent to your email.</p>
        </div>
      </div>
    </StyledConfirmCodeModal>
  );
};

export default ConfirmCodeModal;
