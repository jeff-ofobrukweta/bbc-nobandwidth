// const { from } = require("core-js/fn/array");
import LandingContent from "../../index";
import { shallowMount } from "@vue/test-utils";

describe("TESTING THE LANDING VIEW", () => {
  const data = {
    articleUrl: "http://www.bbc.co.uk/news/world/asia/india",
    author: "By me!",
    compareTabs:
      "1 cigarette is equivalent to an air pollution of 22 μg/m3 (Absolute value: 21.6 μg/m3) for one day.",
    country: "India",
    createdOn: "20 November 2017",
    image:
      "https://news.files.bbci.co.uk/vj/live/idt-images/image-slider-hello/SMOG_vdyw4.jpg",
    p1:
      "Breathing in Delhi is close to smoking more than a dozen cigarettes a day on an average. Click on your city to find out how many cigarettes you are smoking",
    p10:
      "We took the PM 2.5 data of 33 cities in India every day for one week. We calculated the mean of 6 days PM 2.5 data of each city and divided it by 21.6 μg/m3 to get the number of cigarettes. It is also imperative to say the numbers shown is the assumption that you ideally spent most of your time breathing air from outside.",
    p2:
      "On November 7, Indian capital, Delhi woke up to a blanket of thick grey smog.  The toxic haze was so severe that politicians announced plans to close schools.  United Airlines shut all of its flights from the US to Delhi. Visibility was poor as pollution levels reached 30 times the World Health Organization's recommended limit in some areas.",
    p3:
      "According to the data from the System of Air Quality Weather Forecasting and Research website, the levels of tiny particulate matter (known as PM 2.5) that enter deep into the lungs reached as high as 700 micrograms per cubic metre in some areas of Delhi on November 6th. The air quality standard for PM 2.5 is 15 µg/m3 and anything above 81 µg/m3 falls under poor air quality standard.",
    p4:
      "Some reports claimed that New Delhi's air quality was so severe it was equivalent to smoking 45 cigarettes a day. We looked at the data to see if this was true. ",
    p5:
      "Click on your city to find out how many cigarettes you have effectively smoked because of last week's pollution.",
    p6: "Methodology for calculation: ",
    p7:
      "A report by Berkeley Earth showed that in China, 1.6 million people die every year from an average exposure of 52 μg/m3 of PM2.5. To kill 1.6 million people would require, assuming 1.36 x9^6 deaths per cigarette, 1.1 trillion cigarettes. Since the population of China is 1.35 billion, that comes to 764 cigarettes every year per person, or about 2.4 cigarettes per day.",
    p8:
      "Put another way, one cigarette is equivalent to an air pollution of 22 μg/m3 (Absolute value: 21.6 μg/m3) for one day.",
    p9:
      "The average PM2.5 in Beijing over the year is about 85 μg/m3, equivalent to about 4 cigarettes per day. Similarly, if the air pollution in New Delhi, India, is 546 μg/m3, it is equivalent to about 25 cigarettes each day.",
    placeholder: "Select your city",
    title: "Delhi smog: How many cigarettes did you smoke this week?",
  };
  const wrapper = shallowMount(LandingContent, {
    propsData: {
      data,
    },
  });
  test("CHECKING IF PROPS IS VALID", () => {
    expect(wrapper.props("data")).toBe(data);
  });
  test("CHECKING IF ALL THE TEXTS ARE AVAILABLE", () => {
    const title = wrapper.find(".tile");
    expect(title.text()).toContain(data.title);
    const p2 = wrapper.find(".p2");
    expect(p2.text()).toContain(data.p2);
    const p3 = wrapper.find(".p3");
    expect(p3.text()).toContain(data.p3);
  });
});
