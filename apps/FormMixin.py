class Form_Mixin(object):

    def get_error(self):

        if hasattr(self, 'errors'):
            errors = self.errors.get_json_data()
            new_errors = {}
            for k,v in errors.items():
                messages = []
                for message in v:
                    messages.append(message)

                new_errors[k] = messages

            return new_errors

        else:
            return {}

