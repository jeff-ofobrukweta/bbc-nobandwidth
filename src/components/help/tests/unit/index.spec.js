import Help from "../../index";
import { shallowMount } from "@vue/test-utils";

describe("TESTING THE HELP COMPONENT", () => {
  const wrapper = shallowMount(Help, {
    propsData: {
      titleText: "hover",
    },
  });
  test("checking if props exists", () => {
    expect(wrapper.props("titleText")).toBe("hover");
  });
});
