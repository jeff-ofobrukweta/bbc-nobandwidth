import { shallowMount } from "@vue/test-utils";
import btnComponent from "../../index.vue";
describe("BUTTON COMPONENT", () => {
  const wrapper = shallowMount(btnComponent, {
    propsData: {
      customName: "btn",
    },
  });

  test("checking if button exists", async () => {
    const button = wrapper.find("button[name='btn']");
    expect(button);
  });

  test("checking if click triggers an event", () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().changeLang[0][0].Name).toEqual("btn")
  })
});
