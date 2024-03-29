import React from "react";

const DEFAULT_REDIRECT = "/";

/**
 * This should be used any time the redirect path is user-provided
 * (Like the query string on our login/signup pages). This avoids
 * open-redirect vulnerabilities.
 * @param {string} to The redirect destination
 * @param {string} defaultRedirect The redirect to use if the to is unsafe.
 */
export function safeRedirect(
  to: FormDataEntryValue | string | null | undefined,
  defaultRedirect: string = DEFAULT_REDIRECT
) {
  if (!to || typeof to !== "string") {
    return defaultRedirect;
  }

  if (!to.startsWith("/") || to.startsWith("//")) {
    return defaultRedirect;
  }

  return to;
}

export function getUserImgSrc(imageId?: string | null) {
  return imageId ? `/resources/file/${imageId}` : `/img/user.png`;
}

export function getErrorMessage(error: unknown) {
  if (typeof error === "string") return error;
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }
  console.error("Unable to get error message for error", error);
  return "Unknown Error";
}

function debounce<Callback extends (...args: Parameters<Callback>) => void>(
  fn: Callback,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<Callback>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function useDebounce<
  Callback extends (...args: Parameters<Callback>) => ReturnType<Callback>
>(callback: Callback, delay: number) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(
    () =>
      debounce(
        (...args: Parameters<Callback>) => callbackRef.current(...args),
        delay
      ),
    [delay]
  );
}

function callAll<Args extends Array<unknown>>(
  ...fns: Array<((...args: Args) => unknown) | undefined>
) {
  return (...args: Args) => fns.forEach((fn) => fn?.(...args));
}

export function useDoubleCheck() {
  const [doubleCheck, setDoubleCheck] = React.useState(false);

  function getButtonProps(props?: JSX.IntrinsicElements["button"]) {
    const onBlur: JSX.IntrinsicElements["button"]["onBlur"] = () =>
      setDoubleCheck(false);

    const onClick: JSX.IntrinsicElements["button"]["onClick"] = doubleCheck
      ? undefined
      : (e) => {
          e.preventDefault();
          setDoubleCheck(true);
        };

    return {
      ...props,
      onBlur: callAll(onBlur, props?.onBlur),
      onClick: callAll(onClick, props?.onClick),
    };
  }

  return { doubleCheck, getButtonProps };
}

export const waitFor = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
