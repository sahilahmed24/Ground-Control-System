import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import BugResolver from "V3.0"


describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
  
  if(bug==true){
    console.log("Bug found");
    bug.resolve();     
  }else{
    const msg = "Verified";
    pass;
  }
});
