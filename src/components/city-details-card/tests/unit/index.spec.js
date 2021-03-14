import CityDetails from "../../index.vue";
import { shallowMount } from "@vue/test-utils";

describe("TESTING CITY DETILS COMPONENT", () => {
  const details = [{ name: "deli", aqi: "22.5", cigg: "2" }];
  const wrapper = shallowMount(CityDetails, {
    propsData: {
      cityDetails: details,
    },
  });
  test("CHECKING IF PROPS EXISTS", () => {
    expect(wrapper.props("cityDetails")).toBe(details);
  });
  test("CHECKING IF THE EXPECT TEXTS ARE RENDERED FROM PROPS", () => {
    const cityName = wrapper.find(".titlename");
    const cityAqi = wrapper.find(".titleaqi");
    const cityCigg = wrapper.find(".titlecigg");
    expect(cityName.text()).toEqual(details[0].name);
    expect(cityAqi.text()).toEqual(details[0].aqi);
    expect(cityCigg.text()).toEqual(details[0].cigg);
  });
  test("CHECKING IF CLICK TRIGGERS AN EVENT", async () => {
    const closeItem = wrapper.find(".closeItem");
    await closeItem.trigger("click");
    expect(wrapper.emitted().closeAll).toBeTruthy();
  });
});
