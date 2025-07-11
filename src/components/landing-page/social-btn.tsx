import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "../ui/button";

type SocialBtnProps = {
    callback: () => Promise<void>;
    children?: React.ReactNode;
};
const SocialBtn = ({ callback, children }: SocialBtnProps) => {
    const [submitting, setSubmitting] = useState(false);
    const onSubmit = async () => {
        setSubmitting(true);
        await callback();
    };
    return (
        <Button
            className={"flex items-center flex-1/2"}
            disabled={submitting}
            variant={"outline"}
            onClick={onSubmit}
        >
            {submitting
                ? (
                        <Loader2 className={"animate-spin"} />
                    )
                : (
                        <>{children}</>
                    )}
        </Button>
    );
};

export default SocialBtn;
