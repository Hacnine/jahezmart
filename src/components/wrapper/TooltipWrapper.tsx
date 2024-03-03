import { ClickAwayListener, Tooltip, Zoom } from "@mui/material";
import React, { ReactElement } from "react";

interface TooltipWrapperProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  message: string;
  children: ReactElement; // Make children prop required
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({
  open,
  setOpen,
  message,
  children,
}) => {
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <Tooltip
          TransitionComponent={Zoom}
          PopperProps={{
            disablePortal: true,
          }}
          onClose={() => setOpen(false)}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={message}
          sx={{
            color: "red",
            backgroundColor: "red",
            "&.MuiTooltip-tooltip": {
              backgroundColor: "red",
            },
          }}
        >
          {children}
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default TooltipWrapper;
