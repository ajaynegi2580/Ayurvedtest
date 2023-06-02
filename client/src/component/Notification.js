import React, { useImperativeHandle, forwardRef } from "react";

import { useToaster } from "rsuite/toaster";

import { Message } from "rsuite";

export const Alert = React.forwardRef((props, ref) => {
  const toaster = useToaster();

  useImperativeHandle(ref, () => ({
    showToaster(propsMessage) {
      const message = (
        <Message
          showIcon
          type={propsMessage.status === 1 ? "success" : "error"}
        >
          {propsMessage.message}.
        </Message>
      );

      toaster.push(message, {
        duration: 4000,
      });
    },
  }));

  return <></>;
});
