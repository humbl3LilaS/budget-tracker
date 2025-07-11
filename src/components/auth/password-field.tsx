import type { ChangeEventHandler } from "react";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

type PasswordFieldProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const PasswordField = ({ value, onChange }: PasswordFieldProps) => {
    const [visible, setVisible] = useState(false);
    return (
        <div className={"relative"}>
            <Input
                placeholder={"Eg: Abc123@"}
                value={value}
                onChange={onChange}
                type={visible ? "text" : "password"}
            />
            {visible
                ? (
                        <EyeOff
                            className={
                                "absolute size-5 top-1/2 right-4 -translate-y-1/2"
                            }
                            onClick={() => setVisible(false)}
                        />
                    )
                : (
                        <Eye
                            className={
                                "absolute size-5 top-1/2 right-4 -translate-y-1/2"
                            }
                            onClick={() => setVisible(true)}
                        />
                    )}
        </div>
    );
};

export default PasswordField;
