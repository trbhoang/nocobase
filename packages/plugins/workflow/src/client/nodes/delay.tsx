import Duration from "../components/Duration";
import { JOB_STATUS } from "../constants";
import { NAMESPACE } from "../locale";

export default {
  title: `{{t("Delay", { ns: "${NAMESPACE}" })}}`,
  type: 'delay',
  group: 'control',
  fieldset: {
    duration: {
      type: 'number',
      title: `{{t("Duration", { ns: "${NAMESPACE}" })}}`,
      'x-decorator': 'FormItem',
      'x-component': 'Duration',
      default: 60000,
      required: true
    },
    endStatus: {
      type: 'number',
      title: `{{t("End Status", { ns: "${NAMESPACE}" })}}`,
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        placeholder: `{{t("Select status", { ns: "${NAMESPACE}" })}}`,
      },
      enum: [
        { label: `{{t("Succeed and continue", { ns: "${NAMESPACE}" })}}`, value: JOB_STATUS.RESOLVED },
        { label: `{{t("Fail and exit", { ns: "${NAMESPACE}" })}}`, value: JOB_STATUS.FAILED },
      ],
      required: true
    }
  },
  view: {

  },
  scope: {
  },
  components: {
    Duration
  }
};
