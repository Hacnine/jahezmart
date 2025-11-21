import { ClickAwayListener, Tooltip, Zoom } from "@mui/material";
import React, { ReactElement } from "react";



const TooltipWrapper = ({
  open,
  setOpen,
  message,
  children,
}) => {
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <Tooltip
        className="z-30"
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
