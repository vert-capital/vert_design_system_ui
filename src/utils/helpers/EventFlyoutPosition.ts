type elementDimensions = { height: number; width: number };
import { DOMRect } from '@/utils/types/calendar';
const calendarDomRectForVitest = {
  x: 8,
  y: 26,
  width: 903,
  height: 702,
  top: 26,
  right: 911,
  bottom: 728,
  left: 8,
}

export const EVENT_FLYOUT_WIDTH = 400;

export default class EventFlyoutPosition {
  calculateFlyoutPosition(
    eventElementDOMRect: DOMRect,
    flyoutDimensions: elementDimensions,
    calendarDomRectParam: DOMRect | null = null
  ): { top: number | null; left: number | null } | undefined {
    const calendarDomRect = calendarDomRectParam || calendarDomRectForVitest;

    const spaceTop = eventElementDOMRect.top - calendarDomRect.top;
    const spaceRight = calendarDomRect.right - eventElementDOMRect.right;
    const spaceBottom = calendarDomRect.bottom - eventElementDOMRect.bottom;
    const spaceLeft = eventElementDOMRect.left - calendarDomRect.left;

    const flyoutNeededWidth = flyoutDimensions.width + 10;

    const topWhenSpaceToBottomIsNegative =
      spaceBottom < 0
        ? calendarDomRect.bottom - flyoutDimensions.height - 10
        : null;

    const topWhenSpaceTopIsNegative =
      spaceTop < 0 ? calendarDomRect.top + 10 : null;

    if (
      spaceBottom > flyoutDimensions.height &&
      spaceRight > flyoutNeededWidth
    ) {
      return {
        top: topWhenSpaceTopIsNegative
          ? topWhenSpaceTopIsNegative
          : Math.round(eventElementDOMRect.top),
        left: Math.round(eventElementDOMRect.right) + 10,
      };
    }

    if (spaceTop > flyoutDimensions.height && spaceRight > flyoutNeededWidth) {
      return {
        top: topWhenSpaceToBottomIsNegative
          ? topWhenSpaceToBottomIsNegative
          : Math.round(eventElementDOMRect.bottom) - flyoutDimensions.height,
        left: Math.round(eventElementDOMRect.right) + 10,
      };
    }

    if (
      spaceLeft > flyoutNeededWidth &&
      spaceBottom > flyoutDimensions.height
    ) {
      return {
        top: topWhenSpaceTopIsNegative
          ? topWhenSpaceTopIsNegative
          : eventElementDOMRect.top,
        left: Math.round(
          eventElementDOMRect.left - (flyoutDimensions.width + 10)
        ),
      };
    }

    if (spaceLeft > flyoutNeededWidth && spaceTop > flyoutDimensions.height) {
      return {
        top: topWhenSpaceToBottomIsNegative
          ? topWhenSpaceToBottomIsNegative
          : Math.round(eventElementDOMRect.bottom - flyoutDimensions.height),
        left: Math.round(
          eventElementDOMRect.left - (flyoutDimensions.width + 10)
        ),
      };
    }

    if (spaceBottom < flyoutDimensions.height) {
      return { top: calendarDomRect.bottom - flyoutDimensions.height, left: null };
    }

    return { top: eventElementDOMRect.top, left: null };
  }
}
